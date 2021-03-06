import { Session } from 'timer/domain'

export default ({ sessionsRepository }) => async ({ onPause, onError }, { session, timer }) => {
  try {
    clearInterval(timer.interval)
    const pausedSession = Session.pause(session, timer.lapse)

    sessionsRepository.update(pausedSession)

    return onPause({
      session: pausedSession,
    })
  } catch (error) {
    return onError(error)
  }
}
