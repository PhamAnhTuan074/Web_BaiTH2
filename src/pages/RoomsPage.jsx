function RoomsPage() {
  const rooms = [
    { id: 'P101', type: 'Phòng học lý thuyết', status: 'Đang sử dụng' },
    { id: 'P202', type: 'Phòng máy tính', status: 'Sẵn sàng' },
    { id: 'LAB01', type: 'Phòng thí nghiệm', status: 'Bảo trì' },
  ]

  return (
    <section className="page">
      <h2>Danh sách phòng</h2>
      <div className="page-grid">
        {rooms.map((room) => (
          <div className="card" key={room.id}>
            <h3>{room.id}</h3>
            <p>Loại phòng: {room.type}</p>
            <p>Trạng thái: {room.status}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RoomsPage