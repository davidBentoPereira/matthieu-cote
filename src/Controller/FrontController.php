<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class FrontController
 * @package App\Controller
 *
 * @Route("/")
 */
class FrontController extends AbstractController
{
    /**
     * @Route("", name="front_index")
     */
    public function index(): Response
    {
        return $this->render('front/index.html.twig');
    }

    /**
     * @Route("discographie", name="front_discographie")
     */
    public function discographie(): Response
    {
        return $this->render('front/discographie.html.twig');
    }

    /**
     * @Route("biographie", name="front_biographie")
     */
    public function biographie(): Response
    {
        return $this->render('front/biographie.html.twig');
    }

    /**
     * @Route("videos", name="front_videos")
     */
    public function videos(): Response
    {
        return $this->render('front/videos.html.twig');
    }

    /**
     * @Route("photos", name="front_photos")
     */
    public function photos(): Response
    {
        return $this->render('front/photos.html.twig');
    }

    /**
     * @Route("articles", name="front_articles")
     */
    public function articles(): Response
    {
        return $this->render('front/articles.html.twig');
    }

    /**
     * @Route("actualites", name="front_actualites")
     */
    public function actualites(): Response
    {
        return $this->render('front/actualites.html.twig');
    }

    /**
     * @Route("tablatures", name="front_tablatures")
     */
    public function tablatures(): Response
    {
        return $this->render('front/tablatures.html.twig');
    }

    /**
     * @Route("contact", name="front_contact")
     */
    public function contact(): Response
    {
        return $this->render('front/contact.html.twig');
    }

    /**
     * @Route("credits", name="front_credits")
     */
    public function credits(): Response
    {
        return $this->render('front/credits.html.twig');
    }

    /**
     * @Route("mentions-legales", name="front_mentions_legales")
     */
    public function mentionsLegales(): Response
    {
        return $this->render('front/mentions-legales.html.twig');
    }
}
