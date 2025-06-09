import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 1000 }, // ramp-up ke 20 user
    { duration: '1m', target: 2000 },  // tetap di 20 user
    { duration: '2m', target: 5000 },
    { duration: '3m', target: 8000 },
    { duration: '30s', target: 0 },  // ramp-down
  ],
};

export default function () {
  const res = http.get('https://amanmemilih-backend.motionlaboratory.com/');

  check(res, {
    'status was 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // tunggu 1 detik sebelum user ulangi
}

