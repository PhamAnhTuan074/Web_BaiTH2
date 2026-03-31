
import './App.css'

function App() {
  return (
    <div className="container">

    
      <header className="header">
        <h1>Hệ thống quản lý cơ sở vật chất</h1>
        <nav>
          <a href="#">Trang chủ</a>
          <a href="#">Phòng</a>
          <a href="#">Thiết bị</a>
          <a href="#">Mượn trả</a>
          <a href="#">Thống kê</a>
        </nav>
      </header>

      
      <section className="banner">
        <h2>Quản lý cơ sở vật chất</h2>
        <p>Quản lý tài sản, thiết bị và phòng học một cách hiệu quả</p>
        <button>Bắt đầu</button>
      </section>

   
      <section className="features">
        <div className="card">
          <h3>Quản lý phòng</h3>
          <p>Theo dõi trạng thái và thông tin các phòng</p>
        </div>

        <div className="card">
          <h3>Quản lý thiết bị</h3>
          <p>Danh sách thiết bị và tình trạng sử dụng</p>
        </div>

        <div className="card">
          <h3>Mượn / Trả</h3>
          <p>Quản lý lịch sử mượn và trả thiết bị</p>
        </div>

        <div className="card">
          <h3>Thống kê</h3>
          <p>Báo cáo và phân tích dữ liệu sử dụng</p>
        </div>
      </section>

     
      <footer className="footer">
        <p>© Nhom7 Facility Management System</p>
      </footer>

    </div>
  )
}

export default App