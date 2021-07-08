(function() {
  emailjs.init("user_OMvrMreKDEOENmm4PYs2T");
  })();

  window.onload = function() {
    document.querySelector('.proposal__inputs').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_ugd2mjp', 'template_fsgpbaa', this)
            .then(function() {
              console.log('SUCCESS!');
              return alert("제안해주셔서 감사합니다!");
            }, function(error) {
              console.log('FAILED...', error);
              return alert("전송 실패");
            });
    });
}