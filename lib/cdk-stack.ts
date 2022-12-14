import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { addStaticPageBucket } from './s3resources';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'ReactPipeline', {
      pipelineName: 'ReactPipeline',
      dockerEnabledForSynth: true,
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('sashinshin/cdk-react', 'main'),
        commands: [
          'npm ci',
          'cd frontend && npm install && npm run build  && cd ..',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });

    addStaticPageBucket(this);


  }
}
