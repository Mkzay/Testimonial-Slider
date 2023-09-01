document.addEventListener('DOMContentLoaded', function() {
    const passPort = document.getElementById('passport');
    const previous = document.getElementById('prev');
    const nextIt = document.getElementById('next');
    const conTent = document.getElementById('content');
    const title = document.getElementById('title');
    const jobDe = document.querySelector('#jobTitle');
    
    const originalContent = {
        passPortSrc: passPort.src,
        passPortAlt: passPort.alt,
        conTentHTML: conTent.innerHTML,
        titleHTML: title.innerHTML,
        jobDeHTML: jobDe.innerHTML
    };
    
    nextIt.addEventListener('click', function(){
        passPort.src = '/Img/image-john.jpg';
        passPort.alt = 'image-john';
        conTent.innerHTML = "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.";
        title.innerHTML = 'John Tarkpor';
        jobDe.innerHTML = 'Junior Front-end Developer';
    });
    
    previous.addEventListener('click', function(){
        passPort.src = originalContent.passPortSrc;
        passPort.alt = originalContent.passPortAlt;
        conTent.innerHTML = originalContent.conTentHTML;
        title.innerHTML = originalContent.titleHTML;
        jobDe.innerHTML = originalContent.jobDeHTML;
    });
});