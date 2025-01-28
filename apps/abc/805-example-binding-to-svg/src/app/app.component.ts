import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject
} from '@angular/core';
import * as d3 from 'd3';

import { GraphService, Person, Relationship } from './graph.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent implements OnInit {
  private graphService = inject(GraphService);

  peopleNodes: Person[] = [];
  relationshipNodes: Relationship[] = [];
  simulation: d3.Simulation<Person, Relationship> | undefined;
  @ViewChild('svgEle', { static: true }) svgElement:
    | ElementRef
    | undefined;

  get relationshipNodesForRendering() {
    return this.relationshipNodes as {
      source: Person;
      target: Person;
    }[];
  }

  ngOnInit() {
    if (this.svgElement) {
      const domElement = this.svgElement.nativeElement;
      this.simulation = d3
        .forceSimulation<Person, Relationship>(this.peopleNodes)
        .force('charge', d3.forceManyBody().strength(-30))
        .force('center', d3.forceCenter(500 / 2, 500 / 2))
        .force('x', d3.forceX())
        .force('y', d3.forceY())
        .force(
          'center',
          d3.forceCenter(
            // parentNode needed for firefox
            (domElement.clientWidth ||
              domElement.parentNode.clientWidth) / 2,
            (domElement.clientHeight ||
              domElement.parentNode.clientHeight) / 2
          )
        )
        // really low alpha min and decay result in long running
        // force graph, good for ambient motion during presentation
        .alphaMin(0.0001)
        .alphaDecay(0.0005)
        .on('tick', () => {
          // This is where we would normally manipulate the DOM
          // and update node positions
        })
        .force(
          'link',
          d3
            .forceLink(this.relationshipNodes)
            // Associate links with nodes by way of display name
            .id(node => (node as Person).displayName)
            .distance(0)
            .strength(0.5)
        );

      this.graphService.getPeepsAndRels().subscribe(peepsAndRels => {
        this.peopleNodes = peepsAndRels.people;
        this.relationshipNodes = peepsAndRels.relationships;
        if (this.simulation) {
          this.simulation.nodes(this.peopleNodes);
          this.simulation.force(
            'link',
            d3
              .forceLink(this.relationshipNodes)
              .id(node => (node as Person).displayName)
              .distance(0)
              .strength(0.5)
          );
        }
      });
    }
  }
}
