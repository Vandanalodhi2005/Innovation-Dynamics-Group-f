import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ShopProvider } from './context/ShopContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

const EntryWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ShopProvider>
          <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <div className="min-h-screen bg-gray-50 flex flex-col">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <ScrollToTop />
            </div>
          </Router>
        </ShopProvider>
      </AuthProvider>
    </Provider>
  )
}

export default EntryWrapper
