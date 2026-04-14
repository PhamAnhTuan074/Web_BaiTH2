function BorrowReturnPage() {
  const histories = [
    {
      id: 1,
      item: 'Máy chiếu Epson',
      borrower: 'Nguyễn Văn A',
      status: 'Đã trả',
    },
    {
      id: 2,
      item: 'Laptop Dell',
      borrower: 'Trần Thị B',
      status: 'Đang mượn',
    },
    {
      id: 3,
      item: 'Loa hội trường',
      borrower: 'Lê Văn C',
      status: 'Chờ xác nhận',
    },
  ]

  return (
    <section className="page">
      <h2>Quản lý mượn / trả</h2>
      <div className="page-grid">
        {histories.map((history) => (
          <div className="card" key={history.id}>
            <h3>{history.item}</h3>
            <p>Người mượn: {history.borrower}</p>
            <p>Trạng thái: {history.status}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BorrowReturnPage