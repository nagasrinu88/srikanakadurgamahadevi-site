export default function ContactUs() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        
        <form className="w-full max-w-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-full border border-solid border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] h-12 px-5"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
} 