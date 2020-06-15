import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    // to get it:
    // http://<serice name>.<namespace>.svc.cluster.local
    // kubectl get namespace - to get namespace name
    // kubectl get services -n ingress-nginx - to get service name
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/'
    });
  }
};
