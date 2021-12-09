export function renderPastPoll(pastPoll) {
    const container = document.createElement('div');
    const pQuestionEl = document.createElement('p');
    const pTitleA = document.createElement('p');
    const pTitleB = document.createElement('p');
    const pVotesA = document.createElement('p');
    const pVotesB = document.createElement('p');

    container.classList.add('past-poll');
    pQuestionEl.textContent = pastPoll.question;
    pTitleA.textContent = pastPoll.optionATitle;
    pTitleB.textContent = pastPoll.optionBTitle;
    pVotesA.textContent = pastPoll.optionAVotes;
    pVotesB.textContent = pastPoll.optionBVotes;

    container.append(pQuestionEl, pTitleA, pTitleB, pVotesA, pVotesB);

    return container;
}