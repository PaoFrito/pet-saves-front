
export const LadingPage = () => {
    return(
        <>
            <Header />
            <MainContent />
            <AboutUs />
            <Cta2 />
            <PartnerContextProvider>
                <OurPartners />
            </PartnerContextProvider>
            <Footer />
        </>   
    )
}