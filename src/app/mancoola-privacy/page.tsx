import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './privacy.module.css'

export const metadata: Metadata = {
    title: 'Mancala — Privacy Policy',
    description: 'Privacy policy for the Mancala app for iOS and visionOS.',
}

export default function MancoolaPrivacy() {
    return (
        <main className={styles.page}>
            <article className={styles.wrap}>
                <h1 className={styles.title}>Mancala</h1>
                <p className={styles.subtitle}>Privacy Policy · Effective July 29, 2026</p>

                <p>
                    <strong>The short version: Mancala does not collect your data.</strong> The app
                    has no accounts, no analytics, no advertising, no tracking, and no third-party
                    services. Everything you do in the app stays on your device, with one optional
                    exception — Apple&apos;s Game Center, which you can use for online matches and
                    achievements if you choose to sign in.
                </p>

                <h2 className={styles.heading}>Information stored on your device</h2>
                <p>
                    Mancala keeps a small amount of data locally on your device so the app works the
                    way you left it. None of it is transmitted to us — we have no servers and never
                    see it:
                </p>
                <ul className={styles.list}>
                    <li>
                        Your settings (theme, board material, difficulty, animation speed, and
                        similar preferences)
                    </li>
                    <li>Player names you type in for each mode</li>
                    <li>In-progress games, so you can pick up where you left off</li>
                    <li>
                        A history of your most recent completed games (scores and player names only)
                    </li>
                    <li>Which challenges you have completed</li>
                </ul>
                <p>
                    This data lives only in the app&apos;s local storage and is removed when you
                    delete the app.
                </p>

                <h2 className={styles.heading}>Game Center (optional)</h2>
                <p>
                    Online multiplayer and achievements use Apple&apos;s Game Center. If you sign in:
                </p>
                <ul className={styles.list}>
                    <li>
                        Apple handles authentication, matchmaking, and achievement storage under{' '}
                        <a
                            href="https://www.apple.com/legal/privacy/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apple&apos;s Privacy Policy
                        </a>
                        . We do not receive or store your Apple ID, Game Center profile, or friend
                        list.
                    </li>
                    <li>
                        During an online match, your moves, the board state, and the display name
                        shown in the app (including a custom player name if you have set one) are
                        shared with your opponent through Game Center so the game can be played.
                    </li>
                    <li>
                        Achievement progress is reported to Game Center and appears in your Game
                        Center profile according to your own Game Center privacy settings.
                    </li>
                </ul>
                <p>
                    If you never sign in to Game Center, the app makes no network connections at all.
                </p>

                <h2 className={styles.heading}>AI opponents</h2>
                <p>
                    The computer opponent runs entirely on your device using local game logic. Your
                    board positions and moves are never sent anywhere to compute the AI&apos;s play.
                </p>

                <h2 className={styles.heading}>Motion data</h2>
                <p>
                    If you enable the optional Motion Parallax setting, the app reads your
                    device&apos;s gyroscope to tilt the 3D board as you move your phone. This motion
                    data is used in the moment to render the effect and is never stored or
                    transmitted.
                </p>

                <h2 className={styles.heading}>What we don&apos;t do</h2>
                <ul className={styles.list}>
                    <li>No analytics or telemetry SDKs</li>
                    <li>No advertising or ad identifiers</li>
                    <li>No tracking across apps or websites</li>
                    <li>No selling or sharing of personal information</li>
                    <li>No collection of contacts, location, photos, or any other device data</li>
                </ul>
                <p className={styles.note}>
                    Note: if you have opted in to &ldquo;Share With App Developers&rdquo; in your
                    device&apos;s analytics settings, Apple may provide us with aggregated,
                    anonymized crash and usage statistics. This is controlled entirely by Apple and
                    your iOS settings, not by the app.
                </p>

                <h2 className={styles.heading}>Data retention and deletion</h2>
                <p>
                    Because all app data is stored locally, deleting the app deletes everything it
                    saved. Game Center data (achievements, match history) is managed by Apple and can
                    be reviewed or removed through your Apple Account settings.
                </p>

                <h2 className={styles.heading}>Children&apos;s privacy</h2>
                <p>
                    Mancala does not collect personal information from anyone, including children.
                    Online matches are only available through Game Center, which is subject to
                    Apple&apos;s family and parental control settings.
                </p>

                <h2 className={styles.heading}>Changes to this policy</h2>
                <p>
                    If a future update ever changes how the app handles data, this page will be
                    updated and the effective date above revised before that update ships.
                </p>

                <h2 className={styles.heading}>Contact</h2>
                <p>
                    Questions about this policy or the app? Reach out through the contact form at{' '}
                    <Link className={styles.homeLink} href="/">
                        jackdavey.org
                    </Link>
                    .
                </p>

                <h2 className={styles.heading}>About this website</h2>
                <p>
                    This policy describes the Mancala app. The website hosting it, jackdavey.org,
                    uses Google Analytics and Vercel Analytics to measure site traffic. That is
                    separate from the app, which contains no analytics of any kind.
                </p>

                <hr className={styles.rule} />
                <p className={styles.note}>
                    Mancala is developed by Jack Davey. This policy applies to the Mancala app for
                    iOS and visionOS.
                </p>
            </article>
        </main>
    )
}
