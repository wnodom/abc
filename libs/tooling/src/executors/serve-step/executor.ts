import { ExecutorContext, runExecutor } from '@nx/devkit';

import { ServeStepExecutorSchema } from './schema';

export default async function serveStepExecutor(
  options: ServeStepExecutorSchema,
  context: ExecutorContext
) {
  const [projectName, targetName] = options.serveTarget.split(':');
  if (!projectName || !targetName) {
    throw new Error(
      'Unable to compute project name and target name from `serveTarget` option'
    );
  }

  const serverResults = await runExecutor(
    {
      project: 'server',
      target: 'serve',
      configuration: 'development'
    },
    {},
    context
  );

  let serverFirstOutput = true;

  for await (const result of serverResults) {
    if (!result.success) {
      return result;
    }

    if (serverFirstOutput) {
      serverFirstOutput = false;
      const appResults = await runExecutor(
        {
          project: projectName,
          target: targetName,
          configuration: context.configurationName
        },
        {},
        context
      );

      for await (const result of appResults) {
        if (!result.success) {
          return result;
        }
      }
    }
  }
}
