
const Images = () => {
    return (
        <div className='bg-image' style={{ maxWidth: '24rem', margin: "auto", width: "50%", marginTop: "4%", marginBottom: "3%"}}>
      <img  src='https://mdbcdn.b-cdn.net/img/new/standard/city/053.jpg' className='img-fluid' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0'>Can you see me?</p>
        </div>
      </div>
    </div>
    )
}

export default Images
