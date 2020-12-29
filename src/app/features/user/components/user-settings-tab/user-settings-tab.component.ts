import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserFormService } from '@core/services/user-form.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { Subscription } from 'rxjs';

@Component({
  selector: 'user-settings-tab',
  templateUrl: './user-settings-tab.component.html',
  styleUrls: ['./user-settings-tab.component.scss'],
  providers: [ NzMessageService ],
})
export class UserSettingsTabComponent implements OnInit, OnDestroy {
  settingsForm: FormGroup;
  listOfOption: string[] = [
    'Australia',
    'United Kingdom',
    'Poland',
    'German',
  ];
  listOfSelectedValue = ['Australia'];

  private subscription = new Subscription();

  constructor(
      private formBuilder: FormBuilder,
      private msg: NzMessageService,
      private userFormService: UserFormService,
  ) {
    this.settingsForm = this.formBuilder.group({
      name: 'Hugh',
      lastName: 'Jackman',
      birthdate: '12/10/1968',
      citizenship: null,
      instagram: '@thehughjackman',
      facebook: '@HughJackman',
      email: ['nothugh@example.com', [Validators.email]],
      twitter: '@RealHughJackman',
    });
    this.settingsForm.get('citizenship')?.setValue(['Australia', 'United Kingdom']);
  }

  ngOnInit() {
    this.subscription.add(
      this.userFormService.submitObservable.subscribe(next => {
        this.submitUserEditForm();
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submitUserEditForm() {
    console.log(this.settingsForm.value);
  }

  handleChange({ file, fileList }: NzUploadChangeParam) {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }
}
