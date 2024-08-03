const Meeting = ({params} : {params : {id: string}}) => {
  return (
    <div className="text-black">
      {params.id}
    </div>
  )
}

export default Meeting;
