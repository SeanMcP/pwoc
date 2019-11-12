import React from 'react'
import { Formik } from 'formik'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import useSettings from 'store/useSettings'
import { Form, InputField } from 'components/Form/Form'
import Button from 'components/Button/Button'
import { FIELDS, defaultValues, validationSchema } from 'schemas/settings'
import Grid from 'components/Grid/Grid'

function SettingsView() {
    const [settings, { setAll }] = useSettings()

    function onSubmit(values) {
        const { recommendationCount } = values
        setAll({ recommendationCount })
    }

    return (
        <ViewContainer title="Settings">
            <Formik
                initialValues={defaultValues({
                    [FIELDS.recommendationCount]: settings.recommendationCount
                })}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ dirty, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <InputField
                            description="Default is three"
                            label="Number of recommendations"
                            name="recommendationCount"
                            type="number"
                        />
                        <footer>
                            <Grid
                                columns="2"
                                gap="1rem"
                                inline
                                units="min-content"
                            >
                                <Button disabled={!dirty} primary type="submit">
                                    Save
                                </Button>
                                <Button disabled={!dirty} type="reset">
                                    Reset
                                </Button>
                            </Grid>
                        </footer>
                    </Form>
                )}
            </Formik>
        </ViewContainer>
    )
}

export default SettingsView
