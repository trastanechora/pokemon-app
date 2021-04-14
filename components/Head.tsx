import Head from 'next/head';

export interface IHeadComponentProps {
  title: string;
  description: string;
}

const HeadComponent = ({ title, description }: IHeadComponentProps) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};

export default HeadComponent;
