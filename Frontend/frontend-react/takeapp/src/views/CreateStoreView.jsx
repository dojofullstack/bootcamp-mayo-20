import FormularioStore from "../components/FormularioStore";
import Header from "../components/Header";
import PreviewStore from "../components/PreviewStore";


const CreateStoreView = () => {
  return <>
    
    <Header></Header>

    <main>

        <section className="flex items-center justify-center min-h-screen bg-gray-100 gap-12">

            <FormularioStore/>
            <PreviewStore/>

        </section>

    </main>
  
  </>;
};

export default CreateStoreView;