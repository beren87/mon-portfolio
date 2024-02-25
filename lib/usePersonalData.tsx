import { useState, useEffect } from "react"

export const usePersonalData = () => {
  const [age, setAge] = useState(-1) // Initialisation avec -1 car je n'ai pas encore fêté mon anniversaire cette année
  const [yearsCalisthenics, setYearsCalisthenics] = useState(0)
  const [yearsMotoGP, setYearsMotoGP] = useState(0)

  useEffect(() => {
    const updateData = () => {
      const today = new Date()
      const birthday = new Date(today.getFullYear(), 11, 6) // 6 décembre
      let newAge = today.getFullYear() - 1987 // Année de ma naissance
      if (
        today.getMonth() < 11 ||
        (today.getMonth() === 11 && today.getDate() < 6)
      ) {
        // Si le 6 Décembre n'est pas encore passés de cette année, alors je décrémente l'âge
        newAge--
      }
      setAge(newAge)

      // Date de début pour "voilà 6 ans que je me consacre à la calisthenics"
      const startDateCalisthenics = new Date(2017, 7, 1) // 1er Août 2017
      let diffCalisthenics =
        today.getFullYear() - startDateCalisthenics.getFullYear()
      if (
        today.getMonth() < 7 ||
        (today.getMonth() === 7 && today.getDate() < 1)
      ) {
        diffCalisthenics-- // Réduire d'une année si je n'ai pas encore atteint la date anniversaire cette année
      }
      setYearsCalisthenics(diffCalisthenics)

      // Date de début pour "depuis 25 ans"
      const startDateMotoGP = new Date(1999, 2, 20) // 20 mars 1999
      let diffMotoGP = today.getFullYear() - startDateMotoGP.getFullYear()
      if (
        today.getMonth() < 2 ||
        (today.getMonth() === 2 && today.getDate() < 20)
      ) {
        diffMotoGP-- // Réduire d'une année si je n'ai pas encore atteint la date anniversaire cette année
      }
      setYearsMotoGP(diffMotoGP)
    }

    updateData() // Appel initial
    const interval = setInterval(updateData, 24 * 60 * 60 * 1000) // Mise à jour chaque jour

    return () => clearInterval(interval) // Nettoyer l'intervalle lors du démontage du composant
  }, [])
  return { age, yearsCalisthenics, yearsMotoGP }
}
