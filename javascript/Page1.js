let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("ihkw9").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'image']");
        if(insideSubDataElement !== null){
          insideSubDataElement.src = data[data.length -i -1].image;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'image'){
          subDataElements[i].src = data[data.length -i -1].image;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'title']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].title;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'title'){
          subDataElements[i].textContent = data[data.length -i -1].title;
        }
       } catch (e) { console.log(e) };try { 
        const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'startdate']");
        if(insideSubDataElement !== null){
          insideSubDataElement.textContent = data[data.length -i -1].startdate;
        }
        else if(subDataElements[i].getAttribute('annotationname') === 'startdate'){
          subDataElements[i].textContent = data[data.length -i -1].startdate;
        }
       } catch (e) { console.log(e) };
        subDataElements[i].addEventListener('click',() => {{ location.href= '/Page2/'+data[data.length -i -1]._id+'';}} )
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};