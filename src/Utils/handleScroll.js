import isBottom from './isBottom.js'
export default function handleScroll(page,pages,loading,setPage){
    if(page===pages)return;
    if(isBottom()&&!loading){
      setPage(prev => prev+1);
    }
  }