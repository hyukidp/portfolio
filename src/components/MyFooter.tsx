import logo from "/src/assets/logo.png"

const MyFooter = () => {
  return (
    <div className="mt-20 flex max-w-6xl mx-auto w-full items-center justify-between bg-neutralGray border-t-2 border-t-neutralCyan pt-3">
      <img className="size-16" src={logo}/>
      <p className="text-neutralWhite">Copyright © 2024</p>
    </div>
  )
}

export default MyFooter
