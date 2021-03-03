import Axios from 'axios';
import Head from 'next/head';

const Post = ({ item }) => {
  const { items } = item;
  console.log(items);
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <div>테스트성공</div>
        </>
      )}
    </>
  );
};

export default Post;

export async function getServerSideProps() {
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1j3RC9YeL7sfrc5ZSrV9YA&key=${process.env.YOUTUBE_KEY}`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
