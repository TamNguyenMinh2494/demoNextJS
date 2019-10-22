import Layout from '../comps/MyLayout';

// export default function About() {
//     return (
//         <Layout>
//             <p>This is the about page</p>
//         </Layout>
//     );
// }

// const Page = () => <p>This is about page</p>
// export default withLayout(Page);

const aboutPageContent = <p>This is about page</p>;
export default function About() {
    return <Layout>{aboutPageContent}</Layout>;
}