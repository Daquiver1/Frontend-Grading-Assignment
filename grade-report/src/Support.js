import Nav from './Nav';

const Support = () => {
    return (
        <>
            <Nav />
            <main id="support-body">
                <h1>FAQs</h1>
                <div className="faq">
                    <div className="question">
                        <h3>How can I access my grades as a student?</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="answer">
                        <p>
                            Students can typically access their grades through the school's online portal or
                            management system. Log in to the designated platform using your credentials and navigate 
                            to the "Grades" section to view your current grades.
                        </p>
                    </div>
                </div>

                <div className="faq">
                    <div className="question">
                        <h3>What should I do if I believe there is an error in my grade?</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="answer">
                        <p>
                            If you suspect an error, first step is to contact your instructor. Provide a clear and 
                            and respectful explanation of the issue and ask for clarification. If the matter is 
                            not resolved, you may need to submit a formal grade dispute request to the 
                            administration for review.
                        </p>
                    </div>
                </div>

                <div className="faq">
                    <div className="question">
                        <h3>Can I request a grade change after the semester had ended?</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" stroke="white" strokeWidth="7" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="answer">
                        <p>
                            Grade changes are typically allowed under certain conditions, such as grading eror 
                            or an incomplete grade that needs resolution. However, there is usually a time limit 
                            for grade change requests. Check with the school's policies and submit a request within
                            the allowed timeframe.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})

export default Support
