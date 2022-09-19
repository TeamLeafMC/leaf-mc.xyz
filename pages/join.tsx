import type { NextPage } from 'next'
import Link from 'next/link'

const Join: NextPage = () => {
  return (
    <>
      <div>
        <section className="px-2 py-32 md:px-0">
          <div className="container items-center px-8 mx-auto xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <h1 className="font-bold text-5xl">Leaf MC Join Instructions</h1>
              <p className="text-xl w-screen">
                Everything for TSMP (TristanSMP) is powered by Discord. You{' '}
                <strong>must</strong> have a Discord account and have joined the{' '}
                <Link href="https://discord.gg/ne8nUfRWMu">
                  <a className="hover:text-blue-500 underline">
                    Discord server
                  </a>
                </Link>{' '}
                to join.
              </p>
              <br />
              <p className="text-xl w-screen">
                Once you have joined the Discord server, you will be{' '}
                <span className="font-bold">pinged</span> with the instructions
                on how to join Leaf MC.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Join
