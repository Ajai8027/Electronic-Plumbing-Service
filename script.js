document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#service').value=button.dataset.service;document.querySelector('#enquiry').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});document.querySelector('#enquiry input').focus({preventScroll:true})}));
document.querySelector('#enquiry').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget);document.querySelector('#status').textContent=`Demo preview — Name: ${data.get('name').trim()} | Area: ${data.get('area').trim()} | Service: ${data.get('service')} | Details: ${data.get('details').trim() || 'Not provided'}. Nothing has been sent or stored.`;});
const photoDialog=document.querySelector('#photo-dialog');
const photoButtons=[...document.querySelectorAll('[data-photo]')];let photoIndex=0;
function displayPhoto(index){photoIndex=(index+photoButtons.length)%photoButtons.length;const button=photoButtons[photoIndex];const img=document.querySelector('#full-photo');img.src=button.dataset.photo;img.alt=button.dataset.caption;document.querySelector('#photo-caption').textContent=button.dataset.caption+' · Demo website';document.querySelector('#photo-count').textContent=(photoIndex+1)+' / '+photoButtons.length;}
photoButtons.forEach((button,index)=>button.addEventListener('click',()=>{displayPhoto(index);photoDialog.showModal();document.body.classList.add('viewing-photo');}));
document.querySelector('#close-photo').addEventListener('click',()=>photoDialog.close());
photoDialog.addEventListener('close',()=>document.body.classList.remove('viewing-photo'));
document.querySelector('#previous-photo').addEventListener('click',()=>displayPhoto(photoIndex-1));
document.querySelector('#next-photo').addEventListener('click',()=>displayPhoto(photoIndex+1));
photoDialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();displayPhoto(photoIndex+1)}if(e.key==='ArrowLeft'){e.preventDefault();displayPhoto(photoIndex-1)}});
photoDialog.addEventListener('click',event=>{if(event.target===photoDialog){const r=photoDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)photoDialog.close()}});
