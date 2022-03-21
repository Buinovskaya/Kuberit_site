document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#form');
    form.addEventListener('submit', formSend);

    async function formSend(event){
        event.preventDefault();

        let error = formValidate(form);
        let message = document.querySelector('.error__message');

        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('send.php',{
                method: 'POST',
                body: formData
            });
            if(response.ok){
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            }else{
                alert("Ошибка");
                form.classList.remove('_sending');
            }
            message.classList.add('hidden');
        }else{
            message.classList.remove('hidden');
        }
    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');


        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            
           
            if (input.classList.contains('email')) {
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else{
                if (input.value === ''){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input){
        input.classList.add('_error');
    }
    function formRemoveError(input){
        input.classList.remove('_error');
    }
    function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});





const iconMenu = document.querySelector('.menu__icon');
const nav = document.querySelector('.nav');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('_active');
		nav.classList.toggle('_active');
	});
}