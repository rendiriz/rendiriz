'use client';

import { Tweet } from 'react-tweet';
import { tweet } from './tweet';

export default function StaticTweet(props: any) {
  return (
    <div className="flex justify-center">
      <Tweet {...props} components={tweet} />
    </div>
  );
}
