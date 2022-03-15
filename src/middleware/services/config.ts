interface Host {
  EndPoint: string;
}

interface Config {
  FeedHost: Host;
}

const config: Config = {
  FeedHost: {
    EndPoint:
      'https://my-json-server.typicode.com/hamzasari/mock-data-for-feed-viewer',
  },
};

export default config;
