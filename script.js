const userData = [
  {
    name: "Ana de Armas",
    email: "ana.dearmas@talent.com",
    image: "https://imgs.search.brave.com/bdnjEuwdk47hOZHideD2lOnWdIk8osUairJmF9w94ec/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/ODU2NjYyMS9waG90/by9ob2xseXdvb2Qt/Y2FsaWZvcm5pYS1h/bmEtZGUtYXJtYXMt/YXR0ZW5kcy10aGUt/d29ybGQtcHJlbWll/cmUtb2YtYmFsbGVy/aW5hLXByZXNlbnRl/ZC1ieS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bGRCdFdI/bndYQjYwSmVhVUVO/dTBmU2J5cHhSdDBH/aUxna1ZxWExILVFt/ST0", // Placeholder for Ana
    description: "Cuban-Spanish actress jo 'Knives Out' aur 'Blonde' jaisi movies ke liye jaani jaati hain."
  },
  {
    name: "Sydney Sweeney",
    email: "sydney.s@talent.com",
    image: "https://imgs.search.brave.com/w3EtCGAuI8ONbkP5QaLd4QSeSWLUKZI6bo2NR7RiWYc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjI0/NjUzMTQxOS9waG90/by9zeWRuZXktc3dl/ZW5leS1hdC10aGUt/MTZ0aC1nb3Zlcm5v/cnMtYXdhcmRzLWhl/bGQtYXQtdGhlLXJh/eS1kb2xieS1iYWxs/cm9vbS1hdC1vdmF0/aW9uLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1YZ1g2Z2tQ/N3pXNHAtQ25DS1RP/clc5ZnNSSFZHbzFp/TUZxRWkza3BDQWRj/PQ", // Placeholder for Sydney
    description: "Euphoria aur The White Lotus se fame paane wali versatile actress."
  },
  {
    name: "Emma Watson",
    email: "emma.watson@talent.com",
    image: "https://imgs.search.brave.com/Jr3hEHNtIiP4yz6-TB3bkaOhcizQ5BOQbWXhxlpr3y4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/cGttUG8yXy1nakVP/X0owMmd1SndFSFlT/UzRnPS8yODJ4MTg4/L2ZpbHRlcnM6bm9f/dXBzY2FsZSgpOm1h/eF9ieXRlcygxNTAw/MDApOnN0cmlwX2lj/YygpOmZvcm1hdCh3/ZWJwKS9lbW1hLXdh/dHNvbi0wNzE1MjMt/MDMtOWJmYWU4MTIx/MDEwNDc3ZDkzMzYw/YWI2NzE1OTMyYzEu/anBn", // Placeholder for Emma W
    description: "Harry Potter series ki Hermione aur UN Women Goodwill Ambassador."
  },
  {
    name: "Emma Stone",
    email: "emma.stone@talent.com",
    image: "https://imgs.search.brave.com/h5wjSHkpldh6T2LHK2UTJNzTxnXdlZvzPRTQSWrcwoI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDEu/cGhvdG9nYWxsZXJ5/LmluZC5zaC93cC1j/b250ZW50L3VwbG9h/ZHMvaW5kaWFjb20v/ZW1tYS1zdG9uZS1s/b29rcy1ob3QtYWYt/aW4tdGhpcy1waWN0/dXJlLTIwMTcwNi0x/NDk2NTc5NjcwLmpw/Zz9pbXBvbGljeT1N/ZWRpdW1fV2lkdGhv/bmx5Jnc9NzAw", // Placeholder for Emma S
    description: "Academy Award winner jo 'La La Land' aur 'Poor Things' ke liye mashhoor hain."
  },
  {
    name: "Scarlett Johansson",
    email: "scarlett.j@talent.com",
    image: "https://imgs.search.brave.com/YhF3A-SRvdFDEENFNZuAUXwTkmhcIclxOge11tUEMr4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIz/NjgxMjA5Ni9waG90/by9uZXcteW9yay1u/ZXcteW9yay1zY2Fy/bGV0dC1qb2hhbnNz/b24tYXJyaXZlcy1m/b3ItdGhlLWxhdGUt/c2hvdy13aXRoLXN0/ZXBoZW4tY29sYmVy/dC1pbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9N3p6cUtm/enJYOVNjUGVoamNM/UW8tMkJkT0pIWkpt/clNOTktoRHNRUkQt/VT0", // Placeholder for Scarlett
    description: "Marvel Cinematic Universe ki Black Widow aur duniya ki highest-paid actresses mein se ek."
  }
];

var main = document.querySelector('main')
sum = ''

userData.forEach(function(val){
   sum = sum + `<div class="card">
            <img src="${val.image}" alt="">
            <h1>${val.name}</h1>
            <h3>${val.email}</h3>
            <p>${val.description}</p>
        </div>`
})

main.innerHTML = sum