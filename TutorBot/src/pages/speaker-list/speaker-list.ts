import { Component } from '@angular/core';

import { ActionSheet, ActionSheetController, Config, NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

import { TutorBotData } from '../../providers/tb-data';
import { SessionDetailPage } from '../session-detail/session-detail';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';


@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html'
})
export class SpeakerListPage {
  actionSheet: ActionSheet;
  speakers = [];

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public tbData: TutorBotData, public config: Config) {}

  ionViewDidLoad() {
    this.tbData.getSpeakers().subscribe(speakers => {
      this.speakers = speakers;
    });
  }

  goToSessionDetail(session) {
    this.navCtrl.push(SessionDetailPage, session);
  }

  goToSpeakerDetail(speakerName: any) {
    this.navCtrl.push(SpeakerDetailPage, speakerName);
  }

  goToSpeakerTwitter(speaker) {
    new InAppBrowser(`https://twitter.com/${speaker.twitter}`, '_blank');
  }

  openSpeakerShare(speaker) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share ' + speaker.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: ($event) => {
            console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
            if (window['cordova'] && window['cordova'].plugins.clipboard) {
              window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }

  openContact(speaker) {
    let mode = this.config.get('mode');

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact ' + speaker.name,
      buttons: [
        {
          text: `Email ( ${speaker.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + speaker.email);
          }
        },
        {
          text: `Call ( ${speaker.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + speaker.phone);
          }
        }
      ]
    });

    actionSheet.present();
  }
}
