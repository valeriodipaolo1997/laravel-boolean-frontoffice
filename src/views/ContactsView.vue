
<script>


export default {
    name: 'ContactsView'
}
</script>

<template>
    <div>



        <div class="p-5 mb-4 bg-dark text-light">
            <div class="container py-5">
                <h1 class="display-5 fw-bold">Scopri di più</h1>
                <p class="col-md-8 fs-4">Vieni a provare le nostre novità</p>
                <button class="btn btn-primary btn-lg" type="button">Find out more</button>
            </div>

        </div>





        <div class="container bg-dark rounded-3 p-4 text-light">
            <form action="">
                <div class="mb-3">
                    <label for="name" class="form-label text-uppercase">Name</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Mario Rossi"
                        aria-describedby="nameHelper">
                    <small id="nameHelper">Type your name</small>
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label  text-uppercase">phone</label>
                    <input type="tel" name="phone" id="phone" class="form-control" placeholder="123456"
                        aria-describedby="phoneHelper">
                    <small id="phoneHelper">Type your phone</small>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label text-uppercase">email</label>
                    <input type="text" name="email" id="email" class="form-control" placeholder="mario@rossi.com"
                        aria-describedby="emailHelper">
                    <small id="emailHelper">Type your email</small>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="FormControlTextarea1" rows="3"></textarea>
                </div>

                <div class="container">
                    <div class="d-flex justify-content-center py-3">
                        <span>SEND</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor"
                                class="bi bi-send" viewBox="0 0 16 16">
                                <path
                                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                            </svg>
                        </button>
                    </div>
                </div>

            </form>

        </div>



        <div class="bg-dark text-light mt-5">
            <div class=" d-flex">
                <div class="col text-center">


                    <h2 class="py-5">RECAPITI</h2>



                    <div class="d-flex justify-content-center align-items-center gap-3">
                        <img width="50" src="https://th.bing.com/th/id/OIP.55DCXbXlKDgEBoZhKxpzLAAAAA?rs=1&pid=ImgDetMain"
                            alt="">
                        <img width="50"
                            src="https://th.bing.com/th/id/R.26d9974a1feec9905a4e0d5e5ddf8db6?rik=ycoXFwG5Udz08A&pid=ImgRaw&r=0"
                            alt="">
                    </div>

                    <h2 class="pt-5">SEDE</h2>
                    <p>Via palazzo Venezia 12</p>
                    <p>Pescara (PE)</p>

                </div>

                <div class="col">
                    <img class="img-fluid" src="https://foundthebar.com/gall/12.jpg" alt="">
                </div>

            </div>


        </div>

    </div>
</template>


<style scoped></style>
