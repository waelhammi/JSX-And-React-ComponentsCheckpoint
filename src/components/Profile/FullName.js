function FullName(){
    const linkedinProfile = "https://www.linkedin.com/in/hammi-wa%C3%ABl/";
    return (
        <h1 >Wael hammi
            <a href={linkedinProfile} target="_blank" rel='noreferrer'> <i style={{color:"blue"}} class="bi bi-linkedin"></i> </a>
        </h1>
    );
}

export default FullName;