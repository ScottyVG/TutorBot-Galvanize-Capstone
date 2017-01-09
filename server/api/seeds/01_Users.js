'use strict';

exports.seed = (knex) => {
  return knex(`users`).del().then(() => {
    return knex(`users`)
      .insert([{
        name: 'scottyvg',
        hash_pw: '$2a$06$j/VnOcRDbua45s6zjghbpubcF1wjU4mwmvtmuGAN28MfV3PtfZp2W',
        email: 'holler@scottvangilder.com'
      }, {
        name: 'poncho',
        hash_pw: '$2a$06$j/VnOcRDbua45s6zjghbpubcF1wjU4mwmvtmuGAN28MfV3PtfZp2W',
        email: 'poncho@gloriusponchos.com'
      }, {
        name: 'mrkitty',
        hash_pw: '$2a$06$j/VnOcRDbua45s6zjghbpubcF1wjU4mwmvtmuGAN28MfV3PtfZp2W',
        email: 'fluffball@kittyman.com'
      }, {
        name: 'brightinrose',
        hash_pw: '$2a$06$j/VnOcRDbua45s6zjghbpubcF1wjU4mwmvtmuGAN28MfV3PtfZp2W',
        email: 'brightinrose@gmail.com'
      }]);
  });
};
