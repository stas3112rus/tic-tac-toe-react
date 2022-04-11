import FieldItem from '../Item/Item'
import Header from '../Header/Header'
import Line from '../Line/Line'

const Outside = () => {

    const ceils = () => {
        let result =[];    
        for (let i = 1; i <= 9; i++){
            result.push(<FieldItem itemId={i} key={i}/>)
        }
        
        return result
    }  

    return (
        <>
            <Header/>            
            <div className="field">            
                {ceils().map(ceil=> ceil)}
                <Line name='vertical'/>
                <Line name='horizontal'/>
                <Line name='dioginal'/>
            </div>        
        </>
    )
}

export default Outside;