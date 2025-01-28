import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Person extends d3.SimulationNodeDatum {
  displayName: string;
  index: number;
  color: string;
}

export type Relationship = d3.SimulationLinkDatum<Person>;

export interface RelMap {
  people: Person[];
  relationships: Relationship[];
}

const peepsAndRels: RelMap = {
  people: [
    'Celestine Reilly',
    'Missouri McLaughlin',
    'Mrs. Frida King',
    'Colten Waelchi DDS',
    'Kayleigh Schimmel',
    'Krystel Marquardt',
    'Aida Stamm',
    'Jude Anderson',
    'Ron VonRueden',
    "Nora O'Conner",
    'Kaley Dickinson',
    'Olen Ruecker',
    'Gino Romaguera',
    'Leanna Will',
    'Kristofer Hane',
    'Janie Bahringer',
    'Herbert Rohan',
    'Geo Rice',
    'Reba Baumbach',
    'Virgil Boyle',
    'Mr. Rebeka Huel',
    'Alexie Bartoletti',
    'Carlotta Mueller',
    'Soledad Mosciski',
    'Jerod Weimann',
    'Emory Legros',
    'Darby Bednar DVM',
    'Tatyana DuBuque II',
    'Mr. Minerva Donnelly',
    'Monserrate Schaefer',
    'Dagmar Schaefer',
    'Lottie Rohan III',
    'Ernestina Medhurst DVM',
    'Claudie Fritsch',
    'Lukas Bednar',
    'Pierre McClure',
    'Caden Hammes',
    'Maurice Robel',
    'Lacey Bauch',
    'Blanche Lesch',
    'Ebony Mante',
    'Buford Jakubowski',
    'Ayla Leffler IV',
    'Dr. Sophia Durgan',
    'Pearl Kohler',
    'Ms. Hobart Hauck',
    'Tatum Roob',
    'Justyn Buckridge',
    'Ms. Efren Fisher',
    'Helen Ferry Sr.',
    'Adolf Leffler',
    'Yessenia Bayer IV',
    'Kameron Harris',
    'Maiya Gleason',
    'Ricky Block',
    'Vernon Bartell',
    'Dr. Garret Kirlin',
    'Marlon Williamson',
    'Gladys McGlynn',
    'Miss Juston Deckow',
    'Demetris Nicolas',
    'Conrad Bradtke',
    'Rogers Klocko',
    'Kristian Miller',
    'Shyanne Halvorson',
    'Anabel Kohler',
    'Jazmyne Schowalter',
    'Elvis Toy',
    'Lyda Steuber',
    'Arnoldo Berge',
    'Wilber Langosh',
    'Miguel Abshire V',
    'Elza Kreiger',
    'Myah Hilll PhD',
    'Ms. Magnolia Hand',
    'Allie Hyatt',
    'Antonina White DVM',
    'Jolie Lebsack I',
    'Zelma Orn',
    'Candido Muller',
    'Fred Ratke',
    'Hayley Emard',
    'Lauriane Langworth',
    'Ryann Brekke',
    'Ryley Cruickshank IV',
    'Kirstin Ortiz',
    'Payton Watsica',
    'Daisy Collins',
    'Arvel Haag Sr.',
    'Ward Tromp',
    'Macie Bosco',
    'Justice Dicki',
    'Jaren Kirlin',
    'Josefina Feeney',
    'Norma Renner',
    'Ida Kuhlman',
    'Winona Funk',
    'Isom Jerde',
    'Cheyanne Huels',
    'Beulah Sporer',
    'Bernadette Miller',
    'Dr. Sophia Kuphal',
    'Loraine Considine',
    'Estrella VonRueden',
    'Dr. Sophie Mosciski',
    'Kitty Ledner',
    'Kitty Huel',
    'Mellie Stamm',
    'Andreanne Koch',
    'Ally Ankunding',
    'Gladys Kshlerin',
    'Eliseo Bernhard',
    'Rahul Lebsack',
    'Dallas Orn',
    'Ms. Nelle Hudson',
    'Sonya Corwin',
    'Mr. Adam Hickle',
    'Van Metz',
    'Vilma Funk',
    'Delia Streich',
    'Liza Kautzer',
    'Gregoria Leannon',
    'Jackeline Zemlak',
    'Janet Dickens',
    'Rocio Kuvalis',
    'Dewitt Trantow',
    'Ms. Roscoe Ryan',
    'Lloyd Breitenberg',
    'Trinity Rosenbaum',
    'Pierce Haag',
    'Cassandra Simonis',
    'Heber King',
    'Karine Emmerich',
    'Guillermo Macejkovic',
    'Carlo Barrows',
    'Marion Jerde',
    'Dina Champlin I',
    'Robyn Cruickshank Sr.',
    'Esperanza Kuhlman',
    'Liam Will',
    'Freeman Auer',
    'Stanley Denesik',
    'Elwyn White',
    'Destin Schumm',
    'Miss Mortimer Lehner',
    'Timothy Grimes',
    'Montana Lynch',
    'Caterina Lehner PhD',
    'Athena Lang V',
    'Corine Romaguera',
    'Magdalen Schinner',
    'Chelsie Homenick',
    'Mrs. Leonardo Hickle',
    'Margaret Trantow',
    'Emmett Dickinson',
    'Dora Schmeler IV',
    'Raleigh Kuphal',
    'Kevin Wolff',
    'Godfrey Ryan',
    'Miguel Daugherty',
    'Syble Muller',
    'Aisha Thiel',
    'Adonis Hayes',
    'Nathaniel Lubowitz',
    'Daija Goyette',
    'Dr. Elinore Sauer',
    'Alberta Torphy',
    'Crystel Wilderman',
    'Sofia Lubowitz IV',
    'Keeley Bosco DDS',
    'Alyson Jaskolski',
    'Erika Bernhard',
    'Filomena Greenholt',
    'Halie Trantow',
    'Frederick Ziemann',
    'Rashawn Hills Jr.',
    'Josh Cruickshank',
    'Filiberto Mohr',
    'Kyla Dietrich',
    'Dolores Daniel',
    'Gladys Rice',
    'Aurore Adams II',
    'Raymond Vandervort',
    'Monserrate Kuvalis',
    'Emiliano Dickens',
    'Kaci Abbott',
    'Miss Erna Mills',
    'Dillan Koch',
    'Ms. Estevan Huels',
    'Maida Lebsack',
    'Tatyana Rath',
    'Juvenal Koss',
    'Judy Schinner',
    'Seth Legros',
    'Emely Stokes',
    'Dewitt Greenholt',
    'Ora Green',
    'Mrs. Francis Stanton',
    'Rachel Murazik',
    'Alize Rippin',
    'Aurelio Abshire',
    'Claudia Mertz Sr.',
    'Vernie Bartoletti',
    'Lula Smith',
    'Mrs. Layne Daugherty',
    'Thea Langworth',
    'Alessia Moen',
    'Garett Mante',
    'Guillermo Buckridge',
    'Danyka Schumm',
    'Cristina Schultz',
    'Gerald Gerlach',
    'Winston Terry',
    'Dr. Clemens Huels',
    'Jacinthe Kub',
    'Dr. Betty Considine',
    'Lincoln Kreiger',
    'Ashlee Hickle',
    'Jermain Nader DDS',
    'Eladio Kozey',
    'Kenny Schinner',
    'Mafalda Welch',
    'Lazaro Heller',
    'Tevin Kautzer',
    'Davon Gorczany',
    'Florencio Balistreri III',
    'Sydni Hodkiewicz',
    'Destin Thiel',
    'Marcia McClure',
    'Art Williamson Sr.',
    'Dee Nitzsche',
    'Frederik Nader',
    'Vivianne Kub',
    'Ressie Schinner',
    'Desmond Howe',
    'Lucienne Gottlieb',
    'Ervin Mante',
    'Green Hilpert',
    'Dr. Tyrese Olson',
    'Johnathon Bergstrom',
    'Krista Jaskolski',
    'Therese Lind',
    'Bernita Konopelski',
    'Rosemarie Pfannerstill',
    'Dejah Eichmann',
    'Darlene Hodkiewicz DVM',
    'Mr. Dannie Hills',
    'Mr. Bessie Schmidt',
    'Shaun Towne',
    'Kiara Williamson IV'
  ].map((displayName, index) => ({
    displayName,
    index,
    color: `var(--abc-category-${(index % 8) + 1}-color)`
  })),
  relationships: [
    {
      source: 'Celestine Reilly',
      target: 'Eliseo Bernhard'
    },
    {
      source: 'Missouri McLaughlin',
      target: 'Dallas Orn'
    },
    {
      source: 'Mrs. Frida King',
      target: 'Kiara Williamson IV'
    },
    {
      source: 'Colten Waelchi DDS',
      target: 'Seth Legros'
    },
    {
      source: 'Kayleigh Schimmel',
      target: 'Kitty Huel'
    },
    {
      source: 'Krystel Marquardt',
      target: 'Robyn Cruickshank Sr.'
    },
    {
      source: 'Aida Stamm',
      target: 'Godfrey Ryan'
    },
    {
      source: 'Jude Anderson',
      target: "Nora O'Conner"
    },
    {
      source: 'Ron VonRueden',
      target: 'Myah Hilll PhD'
    },
    {
      source: "Nora O'Conner",
      target: 'Heber King'
    },
    {
      source: 'Kaley Dickinson',
      target: 'Guillermo Macejkovic'
    },
    {
      source: 'Olen Ruecker',
      target: 'Kitty Ledner'
    },
    {
      source: 'Gino Romaguera',
      target: 'Lincoln Kreiger'
    },
    {
      source: 'Leanna Will',
      target: 'Carlo Barrows'
    },
    {
      source: 'Kristofer Hane',
      target: 'Dr. Elinore Sauer'
    },
    {
      source: 'Janie Bahringer',
      target: 'Cheyanne Huels'
    },
    {
      source: 'Herbert Rohan',
      target: 'Desmond Howe'
    },
    {
      source: 'Geo Rice',
      target: 'Dolores Daniel'
    },
    {
      source: 'Reba Baumbach',
      target: 'Guillermo Buckridge'
    },
    {
      source: 'Virgil Boyle',
      target: 'Vivianne Kub'
    },
    {
      source: 'Mr. Rebeka Huel',
      target: 'Ms. Roscoe Ryan'
    },
    {
      source: 'Alexie Bartoletti',
      target: 'Dr. Sophia Kuphal'
    },
    {
      source: 'Carlotta Mueller',
      target: 'Garett Mante'
    },
    {
      source: 'Soledad Mosciski',
      target: 'Nathaniel Lubowitz'
    },
    {
      source: 'Jerod Weimann',
      target: 'Ayla Leffler IV'
    },
    {
      source: 'Emory Legros',
      target: 'Conrad Bradtke'
    },
    {
      source: 'Darby Bednar DVM',
      target: 'Alexie Bartoletti'
    },
    {
      source: 'Tatyana DuBuque II',
      target: 'Erika Bernhard'
    },
    {
      source: 'Mr. Minerva Donnelly',
      target: 'Dr. Garret Kirlin'
    },
    {
      source: 'Monserrate Schaefer',
      target: 'Geo Rice'
    },
    {
      source: 'Dagmar Schaefer',
      target: 'Gino Romaguera'
    },
    {
      source: 'Lottie Rohan III',
      target: 'Andreanne Koch'
    },
    {
      source: 'Ernestina Medhurst DVM',
      target: 'Magdalen Schinner'
    },
    {
      source: 'Claudie Fritsch',
      target: 'Miss Juston Deckow'
    },
    {
      source: 'Lukas Bednar',
      target: 'Montana Lynch'
    },
    {
      source: 'Pierre McClure',
      target: 'Virgil Boyle'
    },
    {
      source: 'Caden Hammes',
      target: 'Kenny Schinner'
    },
    {
      source: 'Maurice Robel',
      target: 'Cassandra Simonis'
    },
    {
      source: 'Lacey Bauch',
      target: 'Kyla Dietrich'
    },
    {
      source: 'Blanche Lesch',
      target: 'Erika Bernhard'
    },
    {
      source: 'Ebony Mante',
      target: 'Kenny Schinner'
    },
    {
      source: 'Buford Jakubowski',
      target: 'Delia Streich'
    },
    {
      source: 'Ayla Leffler IV',
      target: 'Ernestina Medhurst DVM'
    },
    {
      source: 'Dr. Sophia Durgan',
      target: 'Aurore Adams II'
    },
    {
      source: 'Pearl Kohler',
      target: 'Dora Schmeler IV'
    },
    {
      source: 'Ms. Hobart Hauck',
      target: 'Dallas Orn'
    },
    {
      source: 'Tatum Roob',
      target: 'Tatyana DuBuque II'
    },
    {
      source: 'Justyn Buckridge',
      target: 'Adolf Leffler'
    },
    {
      source: 'Ms. Efren Fisher',
      target: 'Josh Cruickshank'
    },
    {
      source: 'Helen Ferry Sr.',
      target: 'Crystel Wilderman'
    },
    {
      source: 'Adolf Leffler',
      target: 'Guillermo Buckridge'
    },
    {
      source: 'Yessenia Bayer IV',
      target: 'Daija Goyette'
    },
    {
      source: 'Kameron Harris',
      target: 'Lloyd Breitenberg'
    },
    {
      source: 'Maiya Gleason',
      target: 'Jerod Weimann'
    },
    {
      source: 'Ricky Block',
      target: 'Guillermo Buckridge'
    },
    {
      source: 'Vernon Bartell',
      target: 'Anabel Kohler'
    },
    {
      source: 'Dr. Garret Kirlin',
      target: 'Timothy Grimes'
    },
    {
      source: 'Marlon Williamson',
      target: 'Ernestina Medhurst DVM'
    },
    {
      source: 'Gladys McGlynn',
      target: 'Alberta Torphy'
    },
    {
      source: 'Miss Juston Deckow',
      target: 'Dr. Clemens Huels'
    },
    {
      source: 'Demetris Nicolas',
      target: 'Alberta Torphy'
    },
    {
      source: 'Conrad Bradtke',
      target: 'Caterina Lehner PhD'
    },
    {
      source: 'Rogers Klocko',
      target: 'Florencio Balistreri III'
    },
    {
      source: 'Kristian Miller',
      target: 'Norma Renner'
    },
    {
      source: 'Shyanne Halvorson',
      target: 'Marcia McClure'
    },
    {
      source: 'Anabel Kohler',
      target: 'Alize Rippin'
    },
    {
      source: 'Jazmyne Schowalter',
      target: 'Herbert Rohan'
    },
    {
      source: 'Elvis Toy',
      target: 'Ryley Cruickshank IV'
    },
    {
      source: 'Lyda Steuber',
      target: 'Mafalda Welch'
    },
    {
      source: 'Arnoldo Berge',
      target: 'Dina Champlin I'
    },
    {
      source: 'Wilber Langosh',
      target: 'Davon Gorczany'
    },
    {
      source: 'Miguel Abshire V',
      target: 'Garett Mante'
    },
    {
      source: 'Elza Kreiger',
      target: 'Lazaro Heller'
    },
    {
      source: 'Myah Hilll PhD',
      target: 'Liza Kautzer'
    },
    {
      source: 'Ms. Magnolia Hand',
      target: 'Dr. Garret Kirlin'
    },
    {
      source: 'Allie Hyatt',
      target: 'Ms. Nelle Hudson'
    },
    {
      source: 'Antonina White DVM',
      target: 'Kameron Harris'
    },
    {
      source: 'Jolie Lebsack I',
      target: 'Darby Bednar DVM'
    },
    {
      source: 'Zelma Orn',
      target: 'Guillermo Buckridge'
    },
    {
      source: 'Candido Muller',
      target: 'Ms. Roscoe Ryan'
    },
    {
      source: 'Fred Ratke',
      target: 'Tevin Kautzer'
    },
    {
      source: 'Hayley Emard',
      target: 'Heber King'
    },
    {
      source: 'Lauriane Langworth',
      target: 'Estrella VonRueden'
    },
    {
      source: 'Ryann Brekke',
      target: 'Cassandra Simonis'
    },
    {
      source: 'Ryley Cruickshank IV',
      target: 'Dr. Tyrese Olson'
    },
    {
      source: 'Kirstin Ortiz',
      target: 'Gregoria Leannon'
    },
    {
      source: 'Payton Watsica',
      target: 'Lauriane Langworth'
    },
    {
      source: 'Daisy Collins',
      target: 'Elvis Toy'
    },
    {
      source: 'Arvel Haag Sr.',
      target: 'Ms. Hobart Hauck'
    },
    {
      source: 'Ward Tromp',
      target: 'Missouri McLaughlin'
    },
    {
      source: 'Macie Bosco',
      target: 'Kiara Williamson IV'
    },
    {
      source: 'Justice Dicki',
      target: 'Kristofer Hane'
    },
    {
      source: 'Jaren Kirlin',
      target: 'Magdalen Schinner'
    },
    {
      source: 'Josefina Feeney',
      target: 'Alyson Jaskolski'
    },
    {
      source: 'Norma Renner',
      target: 'Ressie Schinner'
    },
    {
      source: 'Ida Kuhlman',
      target: 'Stanley Denesik'
    },
    {
      source: 'Winona Funk',
      target: 'Destin Thiel'
    },
    {
      source: 'Isom Jerde',
      target: 'Pierce Haag'
    },
    {
      source: 'Cheyanne Huels',
      target: 'Mr. Minerva Donnelly'
    },
    {
      source: 'Beulah Sporer',
      target: 'Alberta Torphy'
    },
    {
      source: 'Bernadette Miller',
      target: 'Helen Ferry Sr.'
    },
    {
      source: 'Dr. Sophia Kuphal',
      target: 'Rachel Murazik'
    },
    {
      source: 'Loraine Considine',
      target: 'Kenny Schinner'
    },
    {
      source: 'Estrella VonRueden',
      target: 'Leanna Will'
    },
    {
      source: 'Dr. Sophie Mosciski',
      target: 'Ms. Roscoe Ryan'
    },
    {
      source: 'Kitty Ledner',
      target: 'Jerod Weimann'
    },
    {
      source: 'Kitty Huel',
      target: 'Montana Lynch'
    },
    {
      source: 'Mellie Stamm',
      target: 'Montana Lynch'
    },
    {
      source: 'Andreanne Koch',
      target: 'Jackeline Zemlak'
    },
    {
      source: 'Ally Ankunding',
      target: 'Monserrate Schaefer'
    },
    {
      source: 'Gladys Kshlerin',
      target: 'Rocio Kuvalis'
    },
    {
      source: 'Eliseo Bernhard',
      target: 'Helen Ferry Sr.'
    },
    {
      source: 'Rahul Lebsack',
      target: 'Dewitt Greenholt'
    },
    {
      source: 'Dallas Orn',
      target: 'Anabel Kohler'
    },
    {
      source: 'Ms. Nelle Hudson',
      target: 'Nathaniel Lubowitz'
    },
    {
      source: 'Sonya Corwin',
      target: 'Jerod Weimann'
    },
    {
      source: 'Mr. Adam Hickle',
      target: 'Claudie Fritsch'
    },
    {
      source: 'Van Metz',
      target: 'Lottie Rohan III'
    },
    {
      source: 'Vilma Funk',
      target: 'Pierre McClure'
    },
    {
      source: 'Delia Streich',
      target: 'Gerald Gerlach'
    },
    {
      source: 'Liza Kautzer',
      target: 'Judy Schinner'
    },
    {
      source: 'Gregoria Leannon',
      target: 'Dolores Daniel'
    },
    {
      source: 'Jackeline Zemlak',
      target: 'Freeman Auer'
    },
    {
      source: 'Janet Dickens',
      target: 'Geo Rice'
    },
    {
      source: 'Rocio Kuvalis',
      target: 'Emiliano Dickens'
    },
    {
      source: 'Dewitt Trantow',
      target: 'Krystel Marquardt'
    },
    {
      source: 'Ms. Roscoe Ryan',
      target: 'Celestine Reilly'
    },
    {
      source: 'Lloyd Breitenberg',
      target: 'Tatyana Rath'
    },
    {
      source: 'Trinity Rosenbaum',
      target: 'Gerald Gerlach'
    },
    {
      source: 'Pierce Haag',
      target: 'Shaun Towne'
    },
    {
      source: 'Cassandra Simonis',
      target: 'Jude Anderson'
    },
    {
      source: 'Heber King',
      target: 'Dolores Daniel'
    },
    {
      source: 'Karine Emmerich',
      target: 'Rocio Kuvalis'
    },
    {
      source: 'Guillermo Macejkovic',
      target: 'Vilma Funk'
    },
    {
      source: 'Carlo Barrows',
      target: 'Emely Stokes'
    },
    {
      source: 'Marion Jerde',
      target: 'Gerald Gerlach'
    },
    {
      source: 'Dina Champlin I',
      target: 'Geo Rice'
    },
    {
      source: 'Robyn Cruickshank Sr.',
      target: 'Elwyn White'
    },
    {
      source: 'Esperanza Kuhlman',
      target: 'Monserrate Schaefer'
    },
    {
      source: 'Liam Will',
      target: "Nora O'Conner"
    },
    {
      source: 'Freeman Auer',
      target: 'Alexie Bartoletti'
    },
    {
      source: 'Stanley Denesik',
      target: 'Antonina White DVM'
    },
    {
      source: 'Elwyn White',
      target: 'Pierce Haag'
    },
    {
      source: 'Destin Schumm',
      target: 'Reba Baumbach'
    },
    {
      source: 'Miss Mortimer Lehner',
      target: 'Sofia Lubowitz IV'
    },
    {
      source: 'Timothy Grimes',
      target: 'Emmett Dickinson'
    },
    {
      source: 'Montana Lynch',
      target: 'Antonina White DVM'
    },
    {
      source: 'Caterina Lehner PhD',
      target: 'Yessenia Bayer IV'
    },
    {
      source: 'Athena Lang V',
      target: 'Marlon Williamson'
    },
    {
      source: 'Corine Romaguera',
      target: 'Liza Kautzer'
    },
    {
      source: 'Magdalen Schinner',
      target: 'Zelma Orn'
    },
    {
      source: 'Chelsie Homenick',
      target: 'Green Hilpert'
    },
    {
      source: 'Mrs. Leonardo Hickle',
      target: 'Jaren Kirlin'
    },
    {
      source: 'Margaret Trantow',
      target: 'Dora Schmeler IV'
    },
    {
      source: 'Emmett Dickinson',
      target: 'Gino Romaguera'
    },
    {
      source: 'Dora Schmeler IV',
      target: 'Dallas Orn'
    },
    {
      source: 'Raleigh Kuphal',
      target: 'Elza Kreiger'
    },
    {
      source: 'Kevin Wolff',
      target: 'Aida Stamm'
    },
    {
      source: 'Godfrey Ryan',
      target: 'Destin Schumm'
    },
    {
      source: 'Miguel Daugherty',
      target: 'Ryann Brekke'
    },
    {
      source: 'Syble Muller',
      target: 'Guillermo Macejkovic'
    },
    {
      source: 'Aisha Thiel',
      target: 'Krista Jaskolski'
    },
    {
      source: 'Adonis Hayes',
      target: 'Rashawn Hills Jr.'
    },
    {
      source: 'Nathaniel Lubowitz',
      target: 'Cassandra Simonis'
    },
    {
      source: 'Daija Goyette',
      target: 'Loraine Considine'
    },
    {
      source: 'Dr. Elinore Sauer',
      target: 'Ernestina Medhurst DVM'
    },
    {
      source: 'Alberta Torphy',
      target: 'Claudia Mertz Sr.'
    },
    {
      source: 'Crystel Wilderman',
      target: 'Cristina Schultz'
    },
    {
      source: 'Sofia Lubowitz IV',
      target: 'Aurore Adams II'
    },
    {
      source: 'Keeley Bosco DDS',
      target: 'Lacey Bauch'
    },
    {
      source: 'Alyson Jaskolski',
      target: 'Caterina Lehner PhD'
    },
    {
      source: 'Erika Bernhard',
      target: 'Danyka Schumm'
    },
    {
      source: 'Filomena Greenholt',
      target: 'Mrs. Leonardo Hickle'
    },
    {
      source: 'Halie Trantow',
      target: 'Ms. Nelle Hudson'
    },
    {
      source: 'Frederick Ziemann',
      target: 'Dee Nitzsche'
    },
    {
      source: 'Rashawn Hills Jr.',
      target: 'Kevin Wolff'
    },
    {
      source: 'Josh Cruickshank',
      target: 'Cassandra Simonis'
    },
    {
      source: 'Filiberto Mohr',
      target: 'Davon Gorczany'
    },
    {
      source: 'Kyla Dietrich',
      target: 'Filiberto Mohr'
    },
    {
      source: 'Dolores Daniel',
      target: 'Blanche Lesch'
    },
    {
      source: 'Gladys Rice',
      target: 'Maida Lebsack'
    },
    {
      source: 'Aurore Adams II',
      target: 'Dolores Daniel'
    },
    {
      source: 'Raymond Vandervort',
      target: 'Colten Waelchi DDS'
    },
    {
      source: 'Monserrate Kuvalis',
      target: 'Crystel Wilderman'
    },
    {
      source: 'Emiliano Dickens',
      target: 'Justice Dicki'
    },
    {
      source: 'Kaci Abbott',
      target: 'Kitty Ledner'
    },
    {
      source: 'Miss Erna Mills',
      target: 'Filomena Greenholt'
    },
    {
      source: 'Dillan Koch',
      target: 'Ryann Brekke'
    },
    {
      source: 'Ms. Estevan Huels',
      target: 'Winona Funk'
    },
    {
      source: 'Maida Lebsack',
      target: 'Payton Watsica'
    },
    {
      source: 'Tatyana Rath',
      target: 'Aurelio Abshire'
    },
    {
      source: 'Juvenal Koss',
      target: 'Kayleigh Schimmel'
    },
    {
      source: 'Judy Schinner',
      target: 'Isom Jerde'
    },
    {
      source: 'Seth Legros',
      target: 'Ayla Leffler IV'
    },
    {
      source: 'Emely Stokes',
      target: 'Elza Kreiger'
    },
    {
      source: 'Dewitt Greenholt',
      target: 'Kaci Abbott'
    },
    {
      source: 'Ora Green',
      target: 'Keeley Bosco DDS'
    },
    {
      source: 'Mrs. Francis Stanton',
      target: 'Erika Bernhard'
    },
    {
      source: 'Rachel Murazik',
      target: 'Aurore Adams II'
    },
    {
      source: 'Alize Rippin',
      target: 'Marlon Williamson'
    },
    {
      source: 'Aurelio Abshire',
      target: 'Dr. Tyrese Olson'
    },
    {
      source: 'Claudia Mertz Sr.',
      target: 'Corine Romaguera'
    },
    {
      source: 'Vernie Bartoletti',
      target: 'Pearl Kohler'
    },
    {
      source: 'Lula Smith',
      target: 'Emiliano Dickens'
    },
    {
      source: 'Mrs. Layne Daugherty',
      target: 'Buford Jakubowski'
    },
    {
      source: 'Thea Langworth',
      target: 'Aurelio Abshire'
    },
    {
      source: 'Alessia Moen',
      target: 'Dr. Clemens Huels'
    },
    {
      source: 'Garett Mante',
      target: 'Conrad Bradtke'
    },
    {
      source: 'Guillermo Buckridge',
      target: 'Margaret Trantow'
    },
    {
      source: 'Danyka Schumm',
      target: 'Darby Bednar DVM'
    },
    {
      source: 'Cristina Schultz',
      target: 'Arnoldo Berge'
    },
    {
      source: 'Gerald Gerlach',
      target: 'Syble Muller'
    },
    {
      source: 'Winston Terry',
      target: 'Lukas Bednar'
    },
    {
      source: 'Dr. Clemens Huels',
      target: 'Justyn Buckridge'
    },
    {
      source: 'Jacinthe Kub',
      target: 'Claudia Mertz Sr.'
    },
    {
      source: 'Dr. Betty Considine',
      target: 'Mr. Adam Hickle'
    },
    {
      source: 'Lincoln Kreiger',
      target: 'Ms. Roscoe Ryan'
    },
    {
      source: 'Ashlee Hickle',
      target: 'Emely Stokes'
    },
    {
      source: 'Jermain Nader DDS',
      target: 'Ms. Magnolia Hand'
    },
    {
      source: 'Eladio Kozey',
      target: 'Mrs. Layne Daugherty'
    },
    {
      source: 'Kenny Schinner',
      target: 'Janet Dickens'
    },
    {
      source: 'Mafalda Welch',
      target: 'Lula Smith'
    },
    {
      source: 'Lazaro Heller',
      target: 'Winston Terry'
    },
    {
      source: 'Tevin Kautzer',
      target: 'Danyka Schumm'
    },
    {
      source: 'Davon Gorczany',
      target: 'Justyn Buckridge'
    },
    {
      source: 'Florencio Balistreri III',
      target: 'Dr. Sophia Durgan'
    },
    {
      source: 'Sydni Hodkiewicz',
      target: 'Estrella VonRueden'
    },
    {
      source: 'Destin Thiel',
      target: 'Halie Trantow'
    },
    {
      source: 'Marcia McClure',
      target: 'Lincoln Kreiger'
    },
    {
      source: 'Art Williamson Sr.',
      target: 'Therese Lind'
    },
    {
      source: 'Dee Nitzsche',
      target: 'Dina Champlin I'
    },
    {
      source: 'Frederik Nader',
      target: 'Dallas Orn'
    },
    {
      source: 'Vivianne Kub',
      target: 'Lula Smith'
    },
    {
      source: 'Ressie Schinner',
      target: 'Ryann Brekke'
    },
    {
      source: 'Desmond Howe',
      target: 'Crystel Wilderman'
    },
    {
      source: 'Lucienne Gottlieb',
      target: 'Dr. Sophia Durgan'
    },
    {
      source: 'Ervin Mante',
      target: 'Ms. Roscoe Ryan'
    },
    {
      source: 'Green Hilpert',
      target: 'Ms. Nelle Hudson'
    },
    {
      source: 'Dr. Tyrese Olson',
      target: 'Athena Lang V'
    },
    {
      source: 'Johnathon Bergstrom',
      target: 'Missouri McLaughlin'
    },
    {
      source: 'Krista Jaskolski',
      target: 'Anabel Kohler'
    },
    {
      source: 'Therese Lind',
      target: 'Dolores Daniel'
    },
    {
      source: 'Bernita Konopelski',
      target: 'Ebony Mante'
    },
    {
      source: 'Rosemarie Pfannerstill',
      target: 'Elvis Toy'
    },
    {
      source: 'Dejah Eichmann',
      target: 'Lacey Bauch'
    },
    {
      source: 'Darlene Hodkiewicz DVM',
      target: 'Olen Ruecker'
    },
    {
      source: 'Mr. Dannie Hills',
      target: 'Aurore Adams II'
    },
    {
      source: 'Mr. Bessie Schmidt',
      target: 'Trinity Rosenbaum'
    },
    {
      source: 'Shaun Towne',
      target: 'Caden Hammes'
    },
    {
      source: 'Kiara Williamson IV',
      target: 'Ms. Estevan Huels'
    }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  getPeepsAndRels() {
    return of(peepsAndRels);
  }
}
