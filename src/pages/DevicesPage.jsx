function DevicesPage() {
  const devices = [
    { id: 'TB01', name: 'Máy chiếu Epson', status: 'Tốt' },
    { id: 'TB02', name: 'Máy tính phòng lab', status: 'Đang sử dụng' },
    { id: 'TB03', name: 'Loa hội trường', status: 'Bảo trì' },
  ]

  return (
    <section className="page">
      <h2>Danh sách thiết bị</h2>
      <div className="page-grid">
        {devices.map((device) => (
          <div className="card" key={device.id}>
            <h3>{device.name}</h3>
            <p>Mã thiết bị: {device.id}</p>
            <p>Tình trạng: {device.status}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DevicesPage