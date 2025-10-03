# Web-Development-day-125
server action in next.js
Server actions in Next.js refer to the functionalities and processes that occur on the server side of a Next.js application. It enables efficient, secure handling of server-side operations like data fetching, form processing, and database interactions, enhancing application security and performance by managing sensitive tasks server-side.

What are Server Actions in Next.js?
Server Action is an Asynchronous server function that can be used on the server side as well as the client side. It is used to handle operations related to the server, such as Form Submissions, Data Updating ( mutations ), Authentication, and Background Tasks such as Email Sending, etc.

To define a Component as a server, You can use a "use server"; directive at the top of an async function or top of the separate file to mark the function as a Server Action.

Syntax:
If you are using Server Action in a client component then you have to make a separate file for the server action and put it in the client component to use that server action.

'use server'
 
export async function formSubmit() {
//other code
}
If you are using Server Action in a server component then you directly define the server action in your component function and use that.

// Server Component
export default function Page() {

  // Server Action
  async function formSubmit() {
    'use server'
 
    //Server Action Logic
  }
 
  return (
    //component element
  )
}
You can aslo pass the server component as a prop to the client component

<SomeClientComponent action={serverAction}  />
