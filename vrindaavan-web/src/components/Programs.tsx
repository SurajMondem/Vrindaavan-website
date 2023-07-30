import Card from "./Card"

const Programs = () => {
  return (
    <section className="p-11 bg-[#91B4CC]">
        <div className="w-full flex m-auto justify-center flex-col items-center mx-4 my-6 z-10">
            <h1 className="text-3xl">
                Our Programs
            </h1>
            <p className="m-6 text-xl">
                making a difference
            </p>
        </div>
        <div className="w-full flex z-10 flex-col md:flex-row">
            <Card title='Economic Development' description='Lorem Ipsum' imgSrc=""/>
            <Card title='Economic Development' description='Lorem Ipsum' imgSrc=""/>
            <Card title='Economic Development' description='Lorem Ipsum' imgSrc=""/>
        </div>
    </section>
  )
}

export default Programs