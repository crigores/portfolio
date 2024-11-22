export default function Cards() {
  return (
    <div className="flex flex-col rounded-2xl w-[420px] bg-[#ffffff] shadow-xl">
      <figure className="flex justify-center items-center rounded-2xl">
        <img src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png" alt="Card Preview" className="rounded-t-2xl" />
      </figure>
      <div className="flex flex-col p-8">
        <div className="text-3xl font-bold  text-center text-[#181C14] pb-6">Mohicano</div>
        <div className=" text-lg  text-center text-[#181C14]">Leverage a graphical editor to create beautiful web components.</div>
        <div className="flex justify-end pt-6">
          <button className="bg-[#181C14] text-[#ffffff] font-bold text-lg w-full p-3 rounded-lg">Agendar</button>
        </div>
      </div>
    </div>
  )
}
