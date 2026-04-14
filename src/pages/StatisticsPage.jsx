function StatisticsPage() {
  const stats = [
    { title: 'Tổng số phòng', value: 24 },
    { title: 'Tổng số thiết bị', value: 156 },
    { title: 'Thiết bị bảo trì', value: 8 },
    { title: 'Lượt mượn tháng này', value: 37 },
  ]

  return (
    <section className="page">
      <h2>Thống kê</h2>
      <div className="page-grid">
        {stats.map((stat) => (
          <div className="card" key={stat.title}>
            <h3>{stat.title}</h3>
            <p className="stat-number">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatisticsPage