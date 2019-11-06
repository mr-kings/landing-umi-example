import dynamic from 'umi/dynamic';
import Team from '../Team';

// 按需加载
// const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
// const App = dynamic({
//   loader: async function() {
//     await delay(1000);
//     return () => Team;
//   },
// });

export default function () {
  return (
    <Team />
  );
}
