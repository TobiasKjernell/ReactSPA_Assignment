import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import { allItems, getItemsByCategory } from './data/data'


function App() {

  const [currentPage, setCurrentPage] = useState('all items')
  const [sortBy, setSortBy] = useState('none');

  const handleSetSortBy = (option) => setSortBy(option);
  const handleSetCurrentPage = (page) => setCurrentPage(page);
  
  return (
    <>
      <Header onCurrentPage={handleSetCurrentPage} currentPage={currentPage} />
      {
        currentPage === 'all items'
          ? <MainContent items={allItems} currentPage={currentPage} sortBy={sortBy} onSortBy={handleSetSortBy} />
          : currentPage && <MainContent items={getItemsByCategory(currentPage)} currentPage={currentPage} sortBy={sortBy} onSortBy={handleSetSortBy} />
      }
      <Footer />
    </>
  )
}

export default App
