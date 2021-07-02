import { Player } from './Player/Player';
import { Form } from '../VideoSection/VideoModal/Form/Form';
import { VideoModal } from './VideoModal/VideoModal';

const LIMIT_TIME = 5;

const modal = new VideoModal({ className: 'video-modal' });

const player = new Player({
  className: 'player',
  limit: LIMIT_TIME,
  modal,
});

new Form({ className: 'form', modal, player });
