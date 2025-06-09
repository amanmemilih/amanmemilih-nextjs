import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 4000 },   // ramp-up to 10 users (normal traffic)
    { duration: '10s', target: 4000 },   // hold normal traffic
    { duration: '5s', target: 8000 },   // 🔥 spike to 100 users
    { duration: '10s', target: 4000 },  // hold spike traffic
    { duration: '5s', target: 1000 },    // drop back to 10 users
    { duration: '10s', target: 4000 },   // stabilize again
    { duration: '5s', target: 0 },     // ramp-down
  ],
};

export default function () {
  const res = http.get('https://https://amanmemilih-backend.motionlaboratory.com/api/');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // simulate user think time
}

