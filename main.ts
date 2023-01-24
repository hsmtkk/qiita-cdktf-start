// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import * as google from '@cdktf/provider-google';

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new google.provider.GoogleProvider(this, 'google', {
      project: 'qiita-cdktf-start',
    });

    new google.storageBucket.StorageBucket(this, 'storage', {
      location: 'us-central1',
      name: 'qiita-cdktf-start-bucket',
    });

  }
}

const app = new App();
new MyStack(app, "qiita-cdktf-start");
app.synth();
