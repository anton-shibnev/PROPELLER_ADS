import { Player } from './Player/Player';
import { Form } from '../VideoSection/VideoModal/Form/Form';
import { VideoModal } from './VideoModal/VideoModal';

const LIMIT_TIME = 2;

const modal = new VideoModal({ className: 'video-modal' });

const player = new Player({
  className: 'player',
  limit: LIMIT_TIME,
  // formSubmit: form.isSubmit,
  modal,
});

new Form({ className: 'form', modal, player });
