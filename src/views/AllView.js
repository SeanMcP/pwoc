import React from 'react'
import { useIndividuals } from 'store/useIndividuals'
import ButtonLink from 'components/ButtonLink/ButtonLink'
import IndividualsList from 'components/IndividualsList/IndividualsList'
import MockSearchbar from 'MockSearchbar'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import ROUTES from 'constants/routes'

function AllView() {
    const [individuals] = useIndividuals()
    return (
        <ViewContainer title="All">
            <MockSearchbar />
            <IndividualsList individuals={individuals} />
            <ButtonLink to={ROUTES.add}>Add</ButtonLink>
        </ViewContainer>
    )
}

export default AllView
